"""empty message

Revision ID: a3f8dddb6c14
Revises: 
Create Date: 2021-07-23 14:00:38.024255

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a3f8dddb6c14'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.VARCHAR(length=30), nullable=False),
    sa.Column('last_name', sa.VARCHAR(length=30), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('discipline', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.Column('age', sa.Integer(), nullable=False),
    sa.Column('location', sa.VARCHAR(), nullable=False),
    sa.Column('gender', sa.Integer(), nullable=False),
    sa.Column('coach', sa.Boolean(), nullable=True),
    sa.Column('img_url', sa.VARCHAR(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('answers',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('about', sa.Text(), nullable=True),
    sa.Column('reach', sa.Integer(), nullable=False),
    sa.Column('professional_level', sa.Integer(), nullable=False),
    sa.Column('current_record', sa.VARCHAR(), nullable=True),
    sa.Column('previous_titles', sa.VARCHAR(), nullable=True),
    sa.Column('fav_rocky_fighter', sa.VARCHAR(), nullable=True),
    sa.Column('walkout_song', sa.VARCHAR(), nullable=True),
    sa.Column('vaccinated', sa.Boolean(), nullable=True),
    sa.Column('nickname', sa.VARCHAR(), nullable=True),
    sa.Column('religion', sa.VARCHAR(), nullable=True),
    sa.Column('has_kids', sa.Boolean(), nullable=True),
    sa.Column('pets', sa.VARCHAR(), nullable=True),
    sa.Column('availability', sa.Integer(), nullable=True),
    sa.Column('rate', sa.Integer(), nullable=True),
    sa.Column('in_person', sa.Boolean(), nullable=True),
    sa.Column('weight_class', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('user_id')
    )
    op.create_table('user_dislikes',
    sa.Column('disliker_id', sa.Integer(), nullable=True),
    sa.Column('disliked_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['disliked_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['disliker_id'], ['users.id'], )
    )
    op.create_table('user_likes',
    sa.Column('like_id', sa.Integer(), nullable=True),
    sa.Column('liked_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['like_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['liked_id'], ['users.id'], )
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user_likes')
    op.drop_table('user_dislikes')
    op.drop_table('answers')
    op.drop_table('users')
    # ### end Alembic commands ###
