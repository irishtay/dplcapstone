class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :post_body
      t.integer :zip
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
