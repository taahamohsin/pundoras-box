bin/rails db:create DISABLE_DATABASE_ENVIRONMENT_CHECK=1
bin/rails db:schema:load DISABLE_DATABASE_ENVIRONMENT_CHECK=1
bin/rails db:migrate DISABLE_DATABASE_ENVIRONMENT_CHECK=1
bin/rails db:seed DISABLE_DATABASE_ENVIRONMENT_CHECK=1