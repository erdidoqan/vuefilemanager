<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <link rel="icon" href="{{ isset($settings->app_favicon) && $settings->app_favicon ? $settings->app_favicon : asset('favicon.png') }}?v={{ get_version() }}">

    <meta charset="utf-8">
    <meta name="fragment" content="!">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="description" content="{{ $metadata['user'] }} is sending you this file">

    {{--OG Public items--}}
    <meta property="og:url" content="{{ $metadata['url'] }}">
    <meta property="og:description" content="{{ $metadata['user'] }} is sending you this file">

    {{--Show protected og metadata--}}
    @if($metadata['is_protected'])
        <meta property="og:title" content="This file is protected by password">
        <title>This file is protected by password</title>
    @endif

    {{--Show public og metadata--}}
    @if(! $metadata['is_protected'])

        @if($metadata['thumbnail'])
            <meta property="og:type" content="image" />
            <meta property="og:image" content="{{ $metadata['thumbnail'] }}">
        @endif

        <meta property="og:title" content="{{ $metadata['name'] }} ({{ $metadata['size'] }}) | {{ isset($settings->app_title) && $settings->app_title ? $settings->app_title : 'VueFileManager' }}">
        <title>{{ $metadata['name'] }} ({{ $metadata['size'] }}) | {{ isset($settings->app_title) && $settings->app_title ? $settings->app_title : 'VueFileManager' }}</title>
    @endif

</head>
<body></body>
</html>
