class PostsController < ApplicationController
  def index
    @posts = Post.order(id: "DESC")
  end

  def new
  end

  def create
    Post.create(memo: params[:memo])
    redirect_to action: :index
  end
end
