all: main.js manifest.json

PWD = $(shell pwd)
BUILD_ROOT = $(PWD)/../build
PRODUCT_TITLE = project_awesome

ifndef PRODUCT_DIR
	PRODUCT_DIR = project_awesome
endif

ifndef SITE_CFG
	SITE_CFG = ./config/project_awesome.rb
endif

COMMON_CFG = ./config/pa_common.rb
TEMPLATE_FOLDER = script_templates
IMG_FOLDER = assets

ERB_COMMAND = erb -r $(COMMON_CFG) -r $(SITE_CFG)
BUILD_DIR = $(BUILD_ROOT)/$(PRODUCT_DIR)

COMMON_FILES = \
	manifest.json \
	main.js

ICONS = \
	$(IMG_FOLDER)/icon.png \
	$(IMG_FOLDER)/icon_32x32.png \
	$(IMG_FOLDER)/icon_38x38.png \
	$(IMG_FOLDER)/icon_48x48.png \
	$(IMG_FOLDER)/icon_128x128.png

clean:
	rm -f main.js manifest.json

check: main.js
	jscs $^
	jshint $^

main.js: $(TEMPLATE_FOLDER)/main.js.erb $(SITE_CFG)
	$(ERB_COMMAND) $< >$@

manifest.json: manifest.json.erb $(SITE_CFG)
	$(ERB_COMMAND) $< >$@

build: clean all
	rm -rf $(BUILD_DIR) $(BUILD_DIR).zip
	mkdir -p $(BUILD_DIR)
	cp -r $(COMMON_FILES) $(ICONS) $(SPECIFIC_FILES) $(BUILD_DIR)
	cd $(BUILD_ROOT) && zip -r $(PRODUCT_DIR).zip $(PRODUCT_DIR)
