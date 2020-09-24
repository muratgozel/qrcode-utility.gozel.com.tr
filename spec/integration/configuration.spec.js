const fs = require('fs')
const path = require('path')
const convict = require('convict')

describe('Configuration.', function() {
  const configPath = path.join(projectPath, './.monodrom')

  it('has initial configuration files.', function() {
    expect(() => require(path.join(projectPath, 'monodrom.config.js'))).not.toThrow()
  })

  it('has a valid configuration.', function() {
    const config = convict(require(path.join(monodromPath, 'src/commands/create', 'config.schema.js')))
    config.load(require(path.join(projectPath, 'monodrom.config.js')))
    expect(() => config.validate({allowed: 'strict'})).not.toThrow()
  })
})
