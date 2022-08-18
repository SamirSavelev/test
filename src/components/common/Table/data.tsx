import { Cell, Row } from "react-table";
import Text from "../../Text";
import ExpandIcon from "./components/ExpandIcon";

export const tableData = [
  {
    status: "Новый",
    number: 2887,
    order: 4329,
    receipt_date: "29.06.2021",
    type: "Контейнер",
    type_container: "40' High Cube",
    sender: "ООО “Компания”",
    certificate: "25499-Т",
    consignment: 440038990,
    manager: {
      name: "Иванов Иван Иванович",
      email: "example@mail.ru",
      phone: "+7(927)777-55-55",
    },
    size: {
      volume: 43.481,
      height: 29.82,
      weight: 5.355,
      length: 12.844,
      width: 3.62,
      freight: 5.355,
    },
    inventory_items: "Опора промежуточная",
    location: "3 скл причал",
    delivery: "Автомобиль",
    description:
      "Следует отметить, что понимание сути ресурсосберегающих технологий обеспечивает актуальность как самодостаточных, так и внешне зависимых концептуальных решений. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира неоднозначны и будут призваны к ответу. Внезапно, базовые сценарии поведения пользователей набирают популярность среди определенных слоев населения, а значит, должны быть описаны максимально подробно. Задача организации, в особенности же выбранный нами инновационный путь, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для новых принципов формирования материально-технической и кадровой базы.",
    file_link: "public/files/1.docx",
  },
  {
    status: "Назначен ответственный менеджер",
    number: 2886,
    order: 4329,
    receipt_date: "29.06.2021",
    type: "Генеральный груз",
    type_container: "40' High Cube",
    sender: "ООО “Компания”",
    certificate: "25499-Т",
    consignment: 440038990,
    manager: {
      name: "Иванов Иван Иванович",
      email: "example@mail.ru",
      phone: "+7(927)777-55-55",
    },
    size: {
      volume: 43.481,
      height: 29.82,
      weight: 5.355,
      length: 12.844,
      width: 3.62,
      freight: 5.355,
    },
    inventory_items: "Опора промежуточная",
    location: "3 скл причал",
    delivery: "car",
    description:
      "Следует отметить, что понимание сути ресурсосберегающих технологий обеспечивает актуальность как самодостаточных, так и внешне зависимых концептуальных решений. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира неоднозначны и будут призваны к ответу. Внезапно, базовые сценарии поведения пользователей набирают популярность среди определенных слоев населения, а значит, должны быть описаны максимально подробно. Задача организации, в особенности же выбранный нами инновационный путь, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для новых принципов формирования материально-технической и кадровой базы.",
  },
  {
    status: "Назначен ответственный менеджер",
    number: 2885,
    order: 4329,
    receipt_date: "29.06.2021",
    type: "Генеральный груз",
    type_container: "40' High Cube",
    sender: "ООО “Компания”",
    certificate: "25499-Т",
    consignment: 440038990,
    manager: {
      name: "Иванов Иван Иванович",
      email: "example@mail.ru",
      phone: "+7(927)777-55-55",
    },
    size: {
      volume: 43.481,
      height: 29.82,
      weight: 5.355,
      length: 12.844,
      width: 3.62,
      freight: 5.355,
    },
    inventory_items: "Опора промежуточная",
    location: "3 скл причал",
    delivery: "car",
    description:
      "Следует отметить, что понимание сути ресурсосберегающих технологий обеспечивает актуальность как самодостаточных, так и внешне зависимых концептуальных решений. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира неоднозначны и будут призваны к ответу. Внезапно, базовые сценарии поведения пользователей набирают популярность среди определенных слоев населения, а значит, должны быть описаны максимально подробно. Задача организации, в особенности же выбранный нами инновационный путь, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для новых принципов формирования материально-технической и кадровой базы.",
  },
  {
    status: "Назначен ответственный менеджер",
    number: 2884,
    order: 4329,
    receipt_date: "29.06.2021",
    type: "Генеральный груз",
    type_container: "40' High Cube",
    sender: "ООО “Компания”",
    certificate: "25499-Т",
    consignment: 440038990,
    manager: {
      name: "Иванов Иван Иванович",
      email: "example@mail.ru",
      phone: "+7(927)777-55-55",
    },
    size: {
      volume: 43.481,
      height: 29.82,
      weight: 5.355,
      length: 12.844,
      width: 3.62,
      freight: 5.355,
    },
    inventory_items: "Опора промежуточная",
    location: "3 скл причал",
    delivery: "car",
    description:
      "Следует отметить, что понимание сути ресурсосберегающих технологий обеспечивает актуальность как самодостаточных, так и внешне зависимых концептуальных решений. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира неоднозначны и будут призваны к ответу. Внезапно, базовые сценарии поведения пользователей набирают популярность среди определенных слоев населения, а значит, должны быть описаны максимально подробно. Задача организации, в особенности же выбранный нами инновационный путь, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для новых принципов формирования материально-технической и кадровой базы.",
  },
  {
    status: "Назначен ответственный менеджер",
    number: 2883,
    order: 4329,
    receipt_date: "29.06.2021",
    type: "Генеральный груз",
    type_container: "40' High Cube",
    sender: "ООО “Компания”",
    certificate: "25499-Т",
    consignment: 440038990,
    manager: {
      name: "Иванов Иван Иванович",
      email: "example@mail.ru",
      phone: "+7(927)777-55-55",
    },
    size: {
      volume: 43.481,
      height: 29.82,
      weight: 5.355,
      length: 12.844,
      width: 3.62,
      freight: 5.355,
    },
    inventory_items: "Опора промежуточная",
    location: "3 скл причал",
    delivery: "car",
    description:
      "Следует отметить, что понимание сути ресурсосберегающих технологий обеспечивает актуальность как самодостаточных, так и внешне зависимых концептуальных решений. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира неоднозначны и будут призваны к ответу. Внезапно, базовые сценарии поведения пользователей набирают популярность среди определенных слоев населения, а значит, должны быть описаны максимально подробно. Задача организации, в особенности же выбранный нами инновационный путь, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для новых принципов формирования материально-технической и кадровой базы.",
  },
  {
    status: "Назначен ответственный менеджер",
    number: 2882,
    order: 4329,
    receipt_date: "29.06.2021",
    type: "Генеральный груз",
    type_container: "40' High Cube",
    sender: "ООО “Компания”",
    certificate: "25499-Т",
    consignment: 440038990,
    manager: {
      name: "Иванов Иван Иванович",
      email: "example@mail.ru",
      phone: "+7(927)777-55-55",
    },
    size: {
      volume: 43.481,
      height: 29.82,
      weight: 5.355,
      length: 12.844,
      width: 3.62,
      freight: 5.355,
    },
    inventory_items: "Опора промежуточная",
    location: "3 скл причал",
    delivery: "car",
    description:
      "Следует отметить, что понимание сути ресурсосберегающих технологий обеспечивает актуальность как самодостаточных, так и внешне зависимых концептуальных решений. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира неоднозначны и будут призваны к ответу. Внезапно, базовые сценарии поведения пользователей набирают популярность среди определенных слоев населения, а значит, должны быть описаны максимально подробно. Задача организации, в особенности же выбранный нами инновационный путь, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для новых принципов формирования материально-технической и кадровой базы.",
  },
  {
    status: "Назначен ответственный менеджер",
    number: 2881,
    order: 4329,
    receipt_date: "29.06.2021",
    type: "Генеральный груз",
    type_container: "40' High Cube",
    sender: "ООО “Компания”",
    certificate: "25499-Т",
    consignment: 440038990,
    manager: {
      name: "Иванов Иван Иванович",
      email: "example@mail.ru",
      phone: "+7(927)777-55-55",
    },
    size: {
      volume: 43.481,
      height: 29.82,
      weight: 5.355,
      length: 12.844,
      width: 3.62,
      freight: 5.355,
    },
    inventory_items: "Опора промежуточная",
    location: "3 скл причал",
    delivery: "car",
    description:
      "Следует отметить, что понимание сути ресурсосберегающих технологий обеспечивает актуальность как самодостаточных, так и внешне зависимых концептуальных решений. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира неоднозначны и будут призваны к ответу. Внезапно, базовые сценарии поведения пользователей набирают популярность среди определенных слоев населения, а значит, должны быть описаны максимально подробно. Задача организации, в особенности же выбранный нами инновационный путь, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для новых принципов формирования материально-технической и кадровой базы.",
  },
];
export const columns = [
  {
    accessor: "number",
    minWidth: 150,
    width: 150,
    Header: (
      <Text tableHeader clickable>
        Номер груза
      </Text>
    ),
    Cell: ({ cell }: { cell: Cell }) => <Text>{cell.value}</Text>,
  },
  {
    accessor: "type",
    minWidth: 165,
    width: 165,
    Header: (
      <Text tableHeader clickable>
        Тип
      </Text>
    ),
    Cell: ({ cell }: { cell: Cell }) => <Text>{cell.value}</Text>,
  },
  {
    accessor: "order",
    minWidth: 200,
    width: 200,
    Header: (
      <Text tableHeader clickable>
        Закрепленный заказ
      </Text>
    ),
    Cell: ({ cell }: { cell: Cell }) => <Text>{cell.value}</Text>,
  },
  {
    Header: (
      <Text tableHeader clickable>
        Грузоотправитель
      </Text>
    ),
    accessor: "sender",
    minWidth: 160,
    width: 160,
    Cell: ({ cell }: { cell: Cell }) => <Text>{cell.value}</Text>,
  },
  {
    accessor: "certificate",
    minWidth: 200,
    width: 200,
    Header: (
      <Text tableHeader clickable>
        Номер приемного акта
      </Text>
    ),
    Cell: ({ cell }: { cell: Cell }) => <Text>{cell.value}</Text>,
  },
  {
    accessor: "consignment",
    minWidth: 300,
    width: 300,
    Header: (
      <Text tableHeader clickable>
        Номер транспортной/ЖД накладной
      </Text>
    ),
    Cell: ({ cell }: { cell: Cell }) => <Text>{cell.value}</Text>,
  },
  {
    accessor: "receipt_date",
    minWidth: 230,
    width: 230,
    Header: (
      <Text tableHeader clickable>
        Дата поступления в порт
      </Text>
    ),
    Cell: ({ cell }: { cell: Cell }) => <Text>{cell.value}</Text>,
  },
  {
    Header: () => null,
    id: "expander",
    minWidth: 70,
    width: 70,
    Cell: ({ row }: { row: Row }) => (
      <span {...row.getToggleRowExpandedProps()}>
        <ExpandIcon rotate={row.isExpanded} />
      </span>
    ),
  },
];
