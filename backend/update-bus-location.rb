#!/usr/bin/env ruby
require 'rubygems'
require 'json'
require 'm2x'
require 'm2x/mqtt'

m2x_client = M2X::MQTT.new('ad41de92c7b683209df1ddd6d88ec392')
m2x_http_client = M2X::Client.new('ad41de92c7b683209df1ddd6d88ec392')

marta = M2X::Client::Collection.list(
  m2x_http_client, {}
).find { |collection| collection["name"] == "MARTA" }

feed_file_names = `ls -1 ./feed`
feed_file_names = feed_file_names.split(/\n/)
feed_file_names.to_a.each do |feed_file_name|

  feed_file = [File.dirname(__FILE__), 'feed', feed_file_name].join(File::SEPARATOR)
  feed = JSON.parse(File.read(feed_file))

  feed.to_a.each do |data|

    if data["ROUTE"] != '185' && data["ROUTE"] != '143' && data["ROUTE"] != '140'
      next
    end

    device = nil
    existing_devices = M2X::Client::Device.search(
      m2x_http_client,
      { name: data["ROUTE"], description: data["DIRECTION"], tags: data["DIRECTION"] }
    )
    if existing_devices.empty?
      device = M2X::Client::Device.create!(
        m2x_http_client,
        {
          name: data["ROUTE"],
          description: data["DIRECTION"],
          tags: data["DIRECTION"],
          visibility: "private",
          collection: marta['id']
        }
      )
      checkin_ts_stream = M2X::Client::Stream.new(
        m2x_http_client,
        device,
        { "name" => 'last_checking_timestamp', "display_name" => 'Last Location Checking' }
      )
      checkin_ts_stream.update!(
        "display_name" => 'Last Location Checking'
      )
    else
      device = existing_devices.first
    end

    resp = device.update_location(
      "latitude" => data["LATITUDE"],
      "longitude" => data["LONGITUDE"],
      "name" => data["STOPID"] + ' - ' + data["TIMEPOINT"],
      "timestamp" => data["MSGTIME"]
    )
    puts resp.inspect
  end
end

