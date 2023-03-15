Rails.application.configure do
  ActiveModelSerializers.config.key_transform = :camel_lower
end