import { defineDb, defineTable, column } from 'astro:db';

// https://astro.build/db/config

const User = defineTable({
  columns: {
    id:       column.number({ primaryKey: true }),
    email:    column.text({ unique: true }),
    username: column.text({ unique: true })
  }
})

const Category = defineTable({
  columns: {
    id:    column.number({ primaryKey: true }),
    label: column.text({ unique: true })
  }
})

const Todo = defineTable({
  columns: {
    id:          column.number({ primaryKey: true }),
    title:       column.text(),
    description: column.text(),
    user_id:     column.number({ references: () => User.columns.id }),
    category_id: column.number({ references: () => Category.columns.id })

  }
})



export default defineDb({
  tables: {
    User, Category, Todo
  }
});
