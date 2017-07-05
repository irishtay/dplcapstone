class CreateLanguages < ActiveRecord::Migration[5.1]
  def change
    create_table :languages do |t|
      t.string :name, null: false
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
