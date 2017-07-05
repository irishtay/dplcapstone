class CreateSports < ActiveRecord::Migration[5.1]
  def change
    create_table :sports do |t|
      t.string :basketball
      t.string :tennis
      t.string :baseball
      t.string :soccer
      t.string :golf
      t.string :football
      t.string :quidditch
      t.string :rockclimbing

      t.timestamps
    end
  end
end
