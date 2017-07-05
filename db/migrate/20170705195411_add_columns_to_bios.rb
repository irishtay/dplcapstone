class AddColumnsToBios < ActiveRecord::Migration[5.1]
  def change
    add_column :bios, :age, :integer
    add_column :bios, :gender, :string
    add_column :bios, :name, :string
    add_column :bios, :image_url, :text
    add_column :bios, :zip, :integer
  end
end
