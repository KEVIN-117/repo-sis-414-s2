<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    //

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function postsTags()
    {
        return $this->hasMany(PostTag::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function likes(){
        return $this->hasMany(Like::class);
    }
}
