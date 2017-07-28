class RemoveGeoFieldsFromPosts < ActiveRecord::Migration[5.1]
  def change
    remove_column :posts, :zip, :integer
    remove_column :posts, :street, :string
    remove_column :posts, :address, :string
    remove_column :posts, :city, :string
    remove_column :posts, :lat, :float
    remove_column :posts, :long, :float
  end
end
