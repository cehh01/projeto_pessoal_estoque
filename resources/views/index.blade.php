<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Estoque pessoal</title>
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>

    <body>
        <div id="app">
            <menu-estoque></menu-estoque>
        </div>
    </body>

        
</html>