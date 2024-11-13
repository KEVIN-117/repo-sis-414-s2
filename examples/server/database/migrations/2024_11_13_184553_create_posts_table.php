<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->uuid("id")->primary();
            $table->foreignUuid("user_id")->constrained()->onDelete("cascade")->onUpdate("cascade");
            $table->string("title");
            $table->text("content");
            $table->string("summary");
            $table->string("status")->default("draft");
            $table->dateTime("published_at")->nullable();
            $table->string("slug")->unique();
            $table->foreignUuid("category_id")->constrained()->onDelete("cascade")->onUpdate("cascade");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
