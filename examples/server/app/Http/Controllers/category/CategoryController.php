<?php

namespace App\Http\Controllers\category;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $categories = Category::all(); // recupera todas las categorias

        return response()->json([
            'categories' => $categories,
            "status" => 200,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $validate = Validator::make($request->all(), [
            'name' => 'required|string',
            'description' => 'required|string',
        ]); // validación de los campos

        if ($validate->fails()) {
            return response()->json([
                'errors' => $validate->errors(),
                'status' => 400,
                'message' => 'Validation Error'
            ]); // si falla la validación
        }

        $category = Category::create($request->all()); // crea la categoría

        return response()->json([
            'category' => $category,
            'status' => 201,
            'message' => 'Category created successfully'
        ]); // si se crea la categoría responde con la categoría creada
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $category = Category::find($id); // busca la categoría por id

        if (!$category) {
            return response()->json([
                'status' => 404,
                'message' => 'Category not found'
            ]);
        } // verifica si la categoría no existe, respondiendo con un mensaje de error

        return response()->json([
            'category' => $category,
            'status' => 200,
            'message' => 'Category found'
        ]); // si la categoría existe, responde con la categoría encontrada
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $category = Category::find($id); // busca la categoría por id

        if (!$category) {
            return response()->json([
                'status' => 404,
                'message' => 'Category not found'
            ]);
        } // verfiica si la categoría no existe, respondiendo con un mensaje de error

        $category->update($request->all()); // actualiza la categoría

        return response()->json([
            'category' => $category,
            'status' => 200,
            'message' => 'Category updated successfully'
        ]); // respondiendo con la categoría actualizada
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $category = Category::find($id); // busca la categoría por id

        if (!$category) {
            return response()->json([
                'status' => 404,
                'message' => 'Category not found'
            ]);
        } // verifica si la categoría no existe, respondiendo con un mensaje de error

        $category->delete(); // elimina la categoría

        return response()->json([
            'status' => 200,
            'message' => 'Category deleted successfully'
        ]); // responde con un mensaje de éxito
    }
}
