class AddGeoFieldsToPosts < ActiveRecord::Migration[5.1]
  def change
    add_column :posts, :zip, :integer
    add_column :posts, :street_address, :string
    add_column :posts, :city, :string
    add_column :posts, :lat, :float
    add_column :posts, :long, :float
  end
end
