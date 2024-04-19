from configloader import ConfigLoader
config = ConfigLoader
config.update_from_object('my_app.settings')
config.update_from_yaml_env('YAML_SETTINGS_PATH')