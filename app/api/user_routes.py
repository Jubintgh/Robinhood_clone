from flask import Blueprint, jsonify
from flask import request
from flask_login import login_required
from app.models import User, db

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


"""


----------------------------------- USER LIKES APIs -----------------------------------


"""


#getAllUserLikes
@user_routes.route('/<int:id>/likes')
def get_likes(id):

    user = User.query.get(id)
    likes = user.likes

    return {'user_likes': [like.to_dict() for like in likes]}

#getAllLikedBy
@user_routes.route('/<int:id>/liked')
def get_liked_by(id):

    user = User.query.get(id)
    likes = user.liked_by

    return {'likes_user': [like.to_dict() for like in likes]}

#createLike
@user_routes.route('/<int:id>/like', methods=['POST'])
def new_like(id):
    liked_instance = request.json
    liked_user_id = liked_instance['liked_id']

    liker = User.query.get(id)
    liked = User.query.get(liked_user_id)

    liked.liked_by.append(liker)
    db.session.commit()

    return {
            'liked_user': 'success'
           }


#removeLike
@user_routes.route('/<int:id>/like', methods=['DELETE'])
def delete_like(id):
    liked_instance = request.json
    liked_user_id = liked_instance['liked_id']

    liker = User.query.get(id)
    liked = User.query.get(liked_user_id)

    liked.liked_by.remove(liker)
    db.session.commit()

    return {
            'liked_user': 'success'
           }


"""


----------------------------------- Discover routes APIs -----------------------------------


"""

@user_routes.route('<int:id>/discover')
def get_user_list(id):
    user = User.query.get(id)
    likes_users = user.likes
    likes_ids = [like.id for like in likes_users]

    new_users = User.query.filter(User.id.any(User.id.notin_(likes_ids))).limit(10)
    

    return {'new_users': [user for user in new_users]}