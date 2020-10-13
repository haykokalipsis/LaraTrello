<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{config('app.name', 'LaraTrello')}}</title>
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    </head>

    <body class="h-screen text-gray-800">
        <div id="app" class="h-full">
            <Board></Board>
        </div>

        <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>