class CreateUsersports < ActiveRecord::Migration[5.1]
  def change
    create_table :user_sports do |t|
      t.string :skill_level
      t.belongs_to :sport, foreign_key: true
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
