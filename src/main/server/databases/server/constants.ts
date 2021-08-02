export const DEFAULT_SOCKET_PORT = 1234;
export const DEFAULT_DB_ITEMS: { [key: string]: Function } = {
    tutorial_is_done: () => 0,
    socket_port: () => DEFAULT_SOCKET_PORT,
    server_address: () => "",
    ngrok_key: () => "",
    password: () => "",
    auto_caffeinate: () => 0,
    auto_start: () => 0,
    enable_ngrok: () => 1,
    proxy_service: () => "Ngrok",
    encrypt_coms: () => 0,
    hide_dock_icon: () => 0,
    last_fcm_restart: () => 0,
    start_via_terminal: () => 0,
    sms_support: () => 0,
    check_for_updates: () => 1,
    auto_install_updates: () => 0
};
