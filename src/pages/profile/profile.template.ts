export interface IProfile { editLink: string; changePasswordLink: string; logoutLink: string }
export default (props: IProfile) => `div(class='profile')
            div(class='profile__sidebar')
                a(class='profile__back' href='/messenger')
            div(class='profile__inner')
                div(class='profile__avatar')

                  button(class='profile__avatar__edit')
                      img(class='profile__avatar__img' alt="avatar" src='https://i.pravatar.cc/130')
                dl(class='profile-table')
                  div(class='profile-table__row')
                      dt(class='profile-table__dt')= 'Почта'
                      dl(class='profile-table__dl')= 'pochta@yandex.ru'
                  div(class='profile-table__row')
                      dt(class='profile-table__dt')= 'Логин'
                      dl(class='profile-table__dl')= 'ivanivanov'
                  div(class='profile-table__row')
                      dt(class='profile-table__dt')= 'Имя'
                      dl(class='profile-table__dl')= 'Иван'
                  div(class='profile-table__row')
                      dt(class='profile-table__dt')= 'Фамилия'
                      dl(class='profile-table__dl')= 'Иванов'
                  div(class='profile-table__row')
                      dt(class='profile-table__dt')= 'Имя в чате'
                      dl(class='profile-table__dl')= 'Иван'
                  div(class='profile-table__row')
                      dt(class='profile-table__dt')= 'Телефон'
                      dl(class='profile-table__dl')= '+7 (909) 967 30 30'
                div(class='profile-actions')
                  ${props.editLink}
                  ${props.changePasswordLink}
                  ${props.logoutLink}`;
