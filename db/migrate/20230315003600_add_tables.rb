class AddTables < ActiveRecord::Migration[7.0]
  def change
    create_table :users, id: :uuid do |t|
      t.string :first_name, null: false
      t.string :middle_name
      t.string :last_name, null: false
      t.integer :score, default: 0, null: false

      t.timestamps
    end

    create_table :rating_definitions, id: :uuid do |t|
      t.integer :value, null: false
      t.string :title
      t.text :description

      t.timestamps
    end

    create_table :jokes, id: :uuid do |t|
      t.references :user, foreign_key: true, type: :uuid
      t.string :title, null: false
      t.text :description

      t.timestamps
    end

     create_table :ratings, id: :uuid do |t|
      t.references :rating_definition, foreign_key: true, type: :uuid
      t.references :joke, foreign_key: true, type: :uuid

      t.timestamps
    end

    add_reference(:jokes, :rating, foreign_key: true, type: :uuid)

  end
end
