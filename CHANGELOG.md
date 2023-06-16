# Change Log

All notable changes to the "codemos-modern" extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.4] - 2023-06-11

### Fixed

- Anchor links in `README.md`.

## [1.0.3] - 2023-06-11

### Added

- `README.md` file with detailed showcase and documentation.
- New images for the `README.md` file.
- New TextMate scopes for **magic functions** and **this, self keywords**.

### Changed

- Extension icon to be more inline with our design language. (It is now a gif)

### Fixed

- The opacity value of the color attribute `editorUnnecessaryCode.opacity` to make it less intense.

### Removed

- Old extension icon.
- Unused opacity attribute in `light.ts`.

## [1.0.2] - 2023-06-09

### Added

- An option to reload the editor window after creating a theme.
- Template theme for making an easier development experience.

### Changed

- Icon for the extension.
- Namespace, module and package syntax highlighting to fit surrounding colors.
- Inactive bracket guide color to fit surrounding colors.

### Fixed

- Editor theme not updating when created from the command `codemos.createTheme`.
- Wrong color attribute name `debugTokenExpression.pri` to `debugTokenExpression.value`.

## [1.0.1] - 2023-06-09

### Changed

- Marketplace description for a shorter one.
- Variable naming to apply eslint standards.

### Fixed

- Scoping conflict resulting with not being able to apply user's theme.
- `editorHoverWidget.highlightForeground` color attribute for better readability.

## [1.0.0] - 2023-06-09

- Initial release

[unreleased]: https://github.com/Codemos-Inc/codemos-modern/compare/v1.0.4...HEAD
[1.0.4]: https://github.com/Codemos-Inc/codemos-modern/compare/v1.0.3...v1.0.4
[1.0.3]: https://github.com/Codemos-Inc/codemos-modern/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/Codemos-Inc/codemos-modern/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/Codemos-Inc/codemos-modern/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/Codemos-Inc/codemos-modern/releases/tag/v1.0.0
