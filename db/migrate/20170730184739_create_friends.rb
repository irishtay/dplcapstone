class CreateFriends < ActiveRecord::Migration[5.1]
  def change
    create_table :friends do |t|
      t.integer :requesting_user_id
      t.string :requesting_user_name
      t.string :requesting_user_body
      t.string :requesting_user_img
      t.integer :receiving_user_id
      t.string :receiving_user_name
      t.string :receiving_user_body
      t.string :receiving_user_img
      t.boolean :accepted, :default => false

    end
  end
end
