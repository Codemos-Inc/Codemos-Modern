<div align="center">

<br/>

<img src="res/icon.png" width="200"/>

<br/>

# **Codemos Modern**

[![release](https://img.shields.io/github/release/Codemos-Inc/Codemos-Modern.svg?labelColor=373737&color=45AA41&label=&logo=github&logoColor=white&style=for-the-badge)](https://github.com/Codemos-Inc/Codemos-Modern/releases/latest)
[![vscode](https://img.shields.io/badge/-v1.81+-4B9ECD.svg?labelColor=373737&logo=visualstudiocode&logoColor=white&style=for-the-badge)](https://code.visualstudio.com/updates/)
[![downloads](https://img.shields.io/visual-studio-marketplace/d/codemos.codemos-modern?labelColor=373737&color=9B87EA&label=&logo=docusign&logoColor=white&style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName=Codemos.codemos-modern)
![sponsors](https://img.shields.io/github/sponsors/EmrecanKaracayir?labelColor=373737&color=ef6363&label=&logo=githubsponsors&logoColor=white&style=for-the-badge)

Innovative, modern theme suite for VS Code

<br/>

![overview](images/header-1.png)

</div>

## 📚 Table of Contents

- [📖 About](#rdme-about)
- [📦 Installation](#rdme-install)
- [📝 Documentation](#rdme-doc)
- [🧩 Extensions](#rdme-ext)
- [📷 Screenshots](#rdme-ss)
- [📋 Change Log](#rdme-clog)
- [🙌🏼 Contribution](#rdme-contrib)
- [📜 License](#rdme-license)

<br/>

<h2 id="rdme-about">📖 About</h1>

We at Codemos, are delighted to bring our most beloved theme family to [Visual Studio Code](https://code.visualstudio.com/). Just as VS Code redefined code editing, we're going to redefine how it should look.

Codemos Modern is a member of the Codemos theme family. It is built from the ground up to be the best modern theme for VS Code. It gets its core principles from the Codemos design language and our [Modern theme principles](#modern-theme-principles).

<br/>

> _Codemos Modern is designed to be the **only modern theme you would ever need** for your code editors._

<br/>

### **Modern theme principles**

We built Codemos Modern with these fundamental principles:

- **Finest Quality:** As all of our themes, our modern theme should be of the highest quality. It should be well thought out and well designed. It should be a pleasure to use.
- **Unopinionated Design:** Our modern theme should stay neutral and not force a specific design language on the user. User should be able to make it their own.
- **Minimal:** Our modern theme should use the bare essentials to create a simple and uncluttered UI. It should not be distracting.
- **Consistent:** Our modern theme should provide a consistent experience across all of the UI. It should be consistent with the other Codemos variants.
- **Accessible:** Our modern theme should be accessible to everyone. It should be easy to read and easy to use.

<br/>

<h2 id="rdme-install">📦 Installation</h1>

1. Open the **Extensions** sidebar in VS Code
1. Search for `Codemos Modern`
1. Click **Install**
1. Open the **Command Palette** with `Ctrl+Shift+P` or `⌘⇧P`
1. Find **Codemos Modern: Configure** and create your own Codemos Modern
1. When your theme is ready, click **Apply** to apply it
1. Enjoy! 🎉

<br/>

> **NOTE:** Learn the basics about Codemos Modern and how to use **Codemos Modern: Configure** by reading the [documentation](#rdme-doc).

<br/>

<h2 id="rdme-doc">📝 Documentation</h1>

In this section, you can find the documentation for the Codemos Modern.

- [Customization](#customization)
- [Adaptability](#adaptability)
- [Color and code intelligibility](#color-and-code-intelligibility)

<br/>

### **Customization**

Codemos Modern provides three customization options through the command **Codemos Modern: Configure**.

<br/>

> **NOTE:** You can activate command **Codemos Modern: Configure** from the **Command Palette**. See [Installation section](#rdme-install) to learn how to do it.

<br/>

1. **Variant:** You can select which variant your theme will use. (Dark/Light)

![variant](images/docs-1-1.png)

2. **Accent color:** You can select which accent color your theme will use. (Accent color determines the color of the important ui elements; buttons, badges, links, emphasized text, etc. and effects the adaptability mode.)

![accent-color](images/docs-1-2.png)

> **NOTE:** In the previous versions of the Codemos Modern you were required to provide a contrast safe accent color. This is no longer the case. You can now provide any color you want and Modern will now cleverly handle accent color to keep itself accessible.

<br/>

3. **Adaptation Mode:** You can select which adaptation mode your theme would use. (Adaptation mode determines how much your accent color influence the rest of the UI. See [Adaptability Section](#adaptability) for more information.)

![adaptation-mode](images/docs-1-3.png)

4. **Enjoy 🎉:** Click **Apply Codemos Modern** to apply your Codemos Modern.

![apply](images/docs-1-4.png)

### **Adaptability**

Adaptability mode is a unique feature of Codemos Modern. Before explaining it, we first need to explain our motivation to create this feature.

With the launch of [Windows 11](https://www.microsoft.com/en-us/windows/windows-11), Microsoft introduced the [Mica material](https://learn.microsoft.com/en-us/windows/apps/design/style/mica) as a part of Windows 11's design system. Mica and its corresponding Apple counterpart [NSVisualEffectView](https://developer.apple.com/documentation/appkit/nsvisualeffectview) achieves the goal of making apps feel more in line with the operating system. Currently, VS Code doesn't provide these kinds of material.

There has been several attempts by the community to bring [glassmorphism](https://uxdesign.cc/glassmorphism-in-user-interfaces-1f39bb1308c9) to VS Code. An example extension which stands out is the [Vibrancy Continued](https://marketplace.visualstudio.com/items?itemName=illixion.vscode-vibrancy-continued) or the original, [Vibrancy](https://marketplace.visualstudio.com/items?itemName=eyhn.vscode-vibrancy). However, these extensions are not perfect. Because of the nature of VS Code, implementing a feature like this needs hacky solutions. These hacky solutions involve modifying/patching the VS Code installation, leaving you with a VS Code installation that is [unsupported](https://code.visualstudio.com/docs/supporting/FAQ#_installation-appears-to-be-corrupt-unsupported). These hacky solutions causes instabilities and UI inconsistences.

We at Codemos, wanted to create a solution that doesn't involve modifying/patching the VS Code installation and doesn't cause any unwanted consequences. We wanted to create a solution that is built into the theme itself. That's why we created the **Adaptability mode**.

<br/>

#### How it works?

When creating your Codemos Modern, you are asked to select an Adaptability mode, see [Customization Section](#customization). Currently, there are three options to choose from; **None**, **Gentle** and **Aggressive**. We are planning to add more options in the future.

When you select an Adaptability mode other than **None**, a clever algorithm will be used to trick your eyes into thinking that the UI has transparency effects. This is done by using the accent color as the reference when calculating the opaque color of the UI elements. This way, the UI elements will adapt to your accent color and they will look like they are letting the light pass through them.

<br/>

### Adaptability modes

- **None:** When you select this option, other UI elements such as background colors will not adapt to your accent color. This is the default option.

- **Gentle:** When you select this option, other UI elements such as background colors will start to adapt to your accent color. This option is the most balanced option.

- **Aggressive:** When you select this option, other UI elements such as background colors will adapt to your accent color as much as possible. This option is the most extreme option.

![adaptability-modes](images/docs-2-1.png)

> **NOTE:** We are currently monitoring this feature and planning to improve it in the future. If you have any suggestions, please [contribute](#rdme-contrib).

<br/>

### **Color and code intelligibility**

Color is the essential part of code editing. Codemos Modern provides a carefully crafted color palette to make your code editing experience more intelligible and enjoyable.

Our color palette takes its foundations from the original Visual Studio/Visual Studio Code color palette. We've made this classic color palette more modern and more accessible. We've also added some new colors to the palette to make it more complete. Every color has a **meaning** and is **consistent** across all the UI. While feeling familiar, it also feels fresh and modern.

Before we dive into color reference, we have one more contribution to code intelligibility. We used text decorations cleverly to give our users more information about their code.

These decorations are:

- <del>Strike-through</del>: This decoration is used to indicate that the symbol is deprecated.
- <strong>Bold</strong>: This decoration is used to indicate that the symbol is abstract.
- <em>Italic</em>: This decoration is used to indicate that the symbol is static.
- <ins>Underline</ins>: This decoration is used to indicate that the symbol allows write access (not read-only).

<br/>

> **NOTE:** Codemos Modern uses both **Semantic Highlighting** and **Syntax Highlighting**. Semantic Highlighting is a new version of token coloring with more capabilities and simplified tokenizing but not yet widely adopted by language extensions. See [Semantic Highlighting](https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide) and [Syntax Highlighting](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide) for more information. We strongly recommend you to use a language extension that supports Semantic Highlighting. We are planning to add support for more languages in the future. Please [contribute](#rdme-contrib) if you want to help us.

<br/>

![color-reference](images/docs-3-1.png)

<br/>

<h2 id="rdme-ext">🧩 Extensions</h1>

We've also decided to theme some of the most used extensions to provide more consistent experience across the entire UI. In order an extension to be themed, it must [contribute themeable colors](https://code.visualstudio.com/api/references/contribution-points#contributes.colors). You can find the list of supported extensions that are themed in Codemos Modern below. If your favorite extension is not on the list, visit [Codemos Modern's GitHub repository](https://github.com/Codemos-Inc/Codemos-Modern) and let us know!

### Supported Extensions

- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)
- [GitHub Pull Requests and Issues](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- [Remote Repositories](https://marketplace.visualstudio.com/items?itemName=ms-vscode.remote-repositories)

<br/>

<h2 id="rdme-ss">📷 Screenshots</h1>

In this section you can find how Codemos Modern looks and feels in most used languages.

- [JavaScript](#javascript)
- [Python](#python)
- [Java](#java)
- [C++](#cpp)
- [HTML](#html)
- [CSS](#css)
- [JSON](#json)

<br/>

### JavaScript

![javascript](images/js.png)

### Python

![python](images/py.png)

### Java

![java](images/java.png)

<h3 id="cpp">C++</h3>

![cpp](images/cpp.png)

### HTML

![html](images/html.png)

### CSS

![css](images/css.png)

### JSON

![json](images/json.png)

<br/>

<h2 id="rdme-clog">📋 Change Log</h1>

Changes from the last release shown below. If you want to see the full change log, visit [CHANGELOG.md](https://github.com/Codemos-Inc/Codemos-Modern/blob/main/CHANGELOG.md).

### Added

- VS Code v1.80.x support.
- Theming support for [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme) extension.
- Ability to sync Modern's configurations via VS Code settings.
- Instant validation for accent color input in the command `Codemos Modern: Configure`.

### Fixed

- Unable to recover theme configurations after updating Modern.
- Inline chat double layered input bug via a hack. (Copilot [issue](https://github.com/microsoft/vscode-copilot-release/issues/248))

### Changed

- Configuration save location from `globalStorage` to settings. This allows Modern to sync configurations across accounts and profiles.
- `Codemos Modern: Create Theme` command to `Codemos Modern: Configure`. Although you can configure Modern through settings, it is recommended to use the command for a better experience.
- Extension icon.

### Removed

- Requirement of providing an accent color with an accessible contrast ratio. Modern will now cleverly handle accent color to keep itself accessible.
- Obsolete `interactiveEditor.*` color attributes.

<br/>

<h2 id="rdme-contrib">🙌🏼 Contribution</h1>

We are open to any kind of contribution. If you want to contribute to Codemos Modern, please join us on [GitHub](https://github.com/Codemos-Inc/Codemos-Modern).

<br/>

<h2 id="rdme-license">📜 License</h1>

Codemos Modern is licensed under the [MIT License](https://github.com/Codemos-Inc/Codemos-Modern/blob/main/LICENSE.md).
