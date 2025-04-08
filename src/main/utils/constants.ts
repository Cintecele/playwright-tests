export class constants {
    public static readonly Constants = class {
        public static readonly timestamp = new Date().getTime().toString();
    }

    public static readonly Headers = class {

        public static enable_content_packages = "Включить контент пакеты";
        public static new_project = "Новый проект";
        public static all_projects = "Все проекты";
        public static authorization = "Авторизация";
    }

    public static readonly Placeholders = class {
        public static login_placeholder = "Логин";
        public static password_placeholder = "Пароль";
        public static content_package_or_component_placeholder = "Название пакета или компонента";
        public static project_name_placeholder = "Название проекта";
    }

    public static readonly Buttons = class{
        public static continue = "Продолжить";
        public static cancel = "Отменить";
        public static back = "Назад";
        public static create_project = "Создать проект";
}
}