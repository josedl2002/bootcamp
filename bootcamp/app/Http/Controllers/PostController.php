<?php

namespace App\Http\Controllers;
use App\Http\Requests\PostRequest;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
   
    public function index() 
    {
        return Inertia::render('Posts/index', [
            'posts' => Post::with('user:id,name')->latest()->get()
       ]);
    }
  
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required | string | max:120',
            'body' => 'required | string | max:300',
       ]);

       $request->user()->posts()->create($validated);

       return redirect(route('posts.index'));
    }

    public function update(Request $request, Post $post)
    {   
        $this->authorize('update', $post);

        $validated = $request->validate([
            'title' => ['required', 'string', 'max:120'],
            'body' => ['required','string', 'max:300'],
       ]);

       $post->update($validated);

       return redirect(route('posts.index'));
    }

    public function destroy(Post $post)
    {
        
    }
}
 