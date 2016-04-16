#!/usr/bin/env ruby
require 'rubygems'
require 'uri'
require 'net/http'
require 'json'

uri = URI("http://developer.itsmarta.com/BRDRestService/RestBusRealTimeService/GetAllBus")

while true do
  response = Net::HTTP.get(uri)
  uniq_ix = Time.now.to_i
  store = [File.dirname(__FILE__), 'feed', uniq_ix.to_s+'.json'].join(File::SEPARATOR)
  IO.write(store, response)
  puts uniq_ix
  sleep 10
end
