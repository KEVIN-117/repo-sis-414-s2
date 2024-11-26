<?php

namespace App\Http\Controllers\post;

use App\Http\Controllers\Controller;
use App\Http\Resources\post\PostCollection;
use App\Http\Resources\post\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $posts = Post::all();

        if (!$posts) {
            return response()->json([
                'message' => 'No posts found',
                'status' => 404,
            ]);
        }

        return new PostCollection($posts);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request["slug"] = $this->createSlug($request->title);

        $validate = Validator::make($request->all(), [
            'user_id' => 'required|string',
            'title' => 'required|string',
            'content' => 'required',
            'summary' => 'required|string',
            'published_at' => 'required|string',
            'category_id' => 'required|string'
        ]);

        /*
        request -> [
            'user_id' => '1',
            'title' => 'CI/CD DevOps',
            'content' => 'CI/CD DevOps es una metodología de desarrollo de software que se basa en la integración continua, la entrega continua y la implementación continua.',
            'summary' => 'CI/CD DevOps es una metodología de desarrollo de software que se basa en la integración continua, la entrega continua y la implementación continua.',
            'published_at' => '2024-11-13 18:45:53',
            'category_id' => '1'
        ]
        */

        if ($validate->fails()) {
            return response()->json([
                'errors' => $validate->errors(),
                'status' => 400,
                'message' => 'Validation Error'
            ]);
        }

        /*
        request -> [
            'user_id' => '1',
            'title' => 'CI/CD DevOps',
            'content' => 'CI/CD DevOps es una metodología de desarrollo de software que se basa en la integración continua, la entrega continua y la implementación continua.',
            'summary' => 'CI/CD DevOps es una metodología de desarrollo de software que se basa en la integración continua, la entrega continua y la implementación continua.',
            'published_at' => '2024-11-13 18:45:53',
            'category_id' => '1',
            'slug' => 'ci-cd-devops'
        ]
        */

        $post = Post::create($request->all());

        if (!$post) {
            return response()->json([
                'message' => 'Post not created',
                'status' => 500,
            ]);
        }

        return response()->json([
            'message' => 'Post created successfully',
            'post' => $post->id,
            'status' => 201,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $post = Post::find($id);

        if (!$post) {
            return response()->json([
                'message' => 'Post not created',
                'status' => 404,
            ]);
        }

        return new PostResource($post);
    }

    public function showBySlug(string $slug)
    {
        //
        $post = Post::where('slug', $slug)->first();

        if (!$post) {
            return response()->json([
                'message' => 'Post not created',
                'status' => 404,
            ]);
        }

        return new PostResource($post);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $post = Post::find($id);

        if (!$post) {
            return response()->json([
                'message' => 'Post not created',
                'status' => 404,
            ]);
        }

        $post->update($request->all());

        return response()->json([
            'message' => 'Post updated successfully',
            'post' => $post->id,
            'status' => 201,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $post = Post::find($id);

        if (!$post) {
            return response()->json([
                'message' => 'Post not created',
                'status' => 404,
            ]);
        }

        $post->delete();

        return response()->json([
            'message' => 'Post deleted successfully',
            'status' => 200,
        ]);
    }

    private function createSlug(string $name): string
    {
        $name = strtolower($name); // CI/CD DevOps -> ci/cd devops
        $name = preg_replace('/[^a-z0-9]+/', '-', $name); // reemplaza los caracteres especiales por guiones -> ci-cd-devops
        $name = trim($name, "-"); // elimina los guiones al principio y al final -> -ci-cd-devops- -> ci-cd-devops
        $name = preg_replace('/_+/', '-', $name);  // ci__cd devops -> ci-cd devops
        return $name; // ci-cd-devops
    }
}
