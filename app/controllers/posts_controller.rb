class PostsController < ApplicationController
  def index
    @posts = Post.order(id: "DESC")
  end

  # def new
  # end

  def create
    post = Post.create(memo: params[:memo])
    render json:{ post: post }
  end
end
