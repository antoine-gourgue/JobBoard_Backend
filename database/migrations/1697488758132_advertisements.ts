import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Advertisements extends BaseSchema {
  protected tableName = 'advertisements'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('description').notNullable()
      table.string('short_description').notNullable()
      table.string('contract_type').notNullable()
      table.timestamps()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
