class PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def new
  end

  def create
    Post.create(memo: params[:memo])
    redirect_to action: :index
  end
end
