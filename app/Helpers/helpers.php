<?php

use App\Models\User;

//jika function 'flashMessage' tidak ada,
if (!function_exists('flashMessage')) {
    //maka buatkan function flashMessage itu sendiri
    function flashMessage($message, $type = 'success'): void
    {
        session()->flash('message', $message);
        session()->flash('type', $type);
    }
}

if (!function_exists('usernameGenerator')) {
    function usernameGenerator(string $name)
    {
        $username = strtolower(preg_replace('/\s+/', '-', trim($name)));
        $original_username = $username;
        $count = 1;

        while (User::where('username', $username)->exists()) {
            $username = $original_username . $count;
            $count++;
        }
    }

    if (!function_exists('signatureMidtrans')) {
        function signatureMidtrans($order_id, $status_code, $gross_amout, $server_key)
        {
            return hash('sha512', $order_id . $status_code . $gross_amout . $server_key);
        }
    }
}
