# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
class BlogPostsController < ApplicationController
  def index
    # ---2)
    #  this @posts variable is containing all the information on the BlogPost Table
    @posts = BlogPost.all
  end

  def show
    # ---3)
    #  this @post variable contains a parameter that allows the end user to call on certain information contain in the BlogPost table
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  #  below is the method 'new'. New has been set up with a variable with the command that creates a new blog post that will be saved on the BlogPost table
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    #  below the variable contains the creation of a new blog and defines strong parameters that only allows the user access to certain infomration or columns on our table. The conditional, if all the params are met, will direct the user to their newly created blog post. If not, they will be directed back to the creation page.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6)
  #  below is the method that contains a param that allows for a saved blog post to be edited. The params accepts the id of the post and the proper info is found.
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # the id contained in @post will be updated. The updates are defined by the strong params.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      #  if the user decides not to destroy the post, they will be redirected back to the same post.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  #  'Private is a built in key word that defines everything below it as a 'strong' param. These are conditions that must be met by the end user for security purposes.
  private
  def blog_post_params
    # ---10)
    #  below we are defining our strong params table, followed by the certain columns the end user will have access to write, create, edit, or destroy.
    params.require(:blog_post).permit(:title, :content)
  end
end
