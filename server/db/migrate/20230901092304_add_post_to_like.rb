class AddPostToLike < ActiveRecord::Migration[7.0]
  def change
    add_reference :likes, :post, type: :uuid, foreign_key: true 
  end
end
