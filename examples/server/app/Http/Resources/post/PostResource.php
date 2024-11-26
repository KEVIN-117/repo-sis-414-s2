<?php

namespace App\Http\Resources\post;

use App\Http\Resources\category\CategoryResource;
use App\Models\Category;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $author = User::find($this->user_id);
        $category = Category::find($this->category_id);
        return [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'author' => [
                'id' => $author->id,
                'name' => $author->name,
                'email' => $author->email,
            ],
            'title' => $this->title,
            'content' => $this->content,
            'summary' => $this->summary,
            'published_at' => $this->published_at,
            'category' => new CategoryResource($category),
            'slug' => $this->slug,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'status' => $this->status,
            'image_url' => $this->image_url,
        ];
    }
}
