#!/usr/bin/env ruby
require 'rubygems'
require 'm2x'

m2x_http_client = M2X::Client.new('ad41de92c7b683209df1ddd6d88ec392')
M2X::Client::Collection.create!(
  m2x_http_client,
  {
    name: "MARTA",
    description: "Metropolitan Atlanta Rapid Transit Authority"
  }
)
