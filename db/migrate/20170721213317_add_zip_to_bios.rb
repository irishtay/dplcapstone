class AddZipToBios < ActiveRecord::Migration[5.1]
  def change
    add_column :bios, :zip, :integer
  end
end
