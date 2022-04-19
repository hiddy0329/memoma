class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :title, null:false
      t.text :memo, null: false
      t.string :tag
      t.timestamps
    end
  end
end