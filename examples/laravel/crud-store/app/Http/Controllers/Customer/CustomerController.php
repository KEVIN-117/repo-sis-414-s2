<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $customers = Customer::all();
        return view('customer.index', compact('customers'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $validator = $request->validate([
            'name' => ['required', 'string'],
            'email' => ['required', 'email', 'unique:customers'],
            'phone' => ['nullable', 'string'],
            'address' => ['nullable', 'string']
        ]);

        Customer::create($validator);
        //back()->with('success', 'Customer created successfully');// http://127.0.0.1:8000/customer/create
        return redirect('/customer');// http://127.0.0.1:8000/customer
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //

        $customer = Customer::find($id);

        return view('customer.show', compact('customer'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $customer = Customer::find($id);

        $customer->update($request->all());
        redirect('/customer');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $customer = Customer::find($id);
        $customer->delete();
        return redirect('/customer');
    }

    public function create()
    {
        return view('customer.create');
    }

    public function updateCustomer(string $id)
    {
        $customer = Customer::find($id);
        return view('customer.update', compact('customer'));
    }
}


// CRUD
