require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Annotator
  class Application < Rails::Application
    config.paperclip_defaults = {
      :storage => :s3,
      :s3_credentials => {
        :bucket => ENV["S3_BUCKET_NAME"],
        :access_key_id => ENV["s3_access_key_id"],
        :secret_access_key => ENV["s3_secret_access_key"],
        :s3_region => ENV["s3_region"]
      }
    }
  end
end
