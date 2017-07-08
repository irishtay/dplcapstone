class AddSportRefToPosts < ActiveRecord::Migration[5.1]
  def change
    add_reference :posts, :sport, foreign_key: true
  end
end
