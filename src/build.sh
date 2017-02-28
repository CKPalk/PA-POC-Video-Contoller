#!/bin/bash
PA_ENV="dev"
USAGE='
########### USAGE  ######################
./build.sh <option>
option:
help    Help Message
qa      Pull the latest repo from qa branch and do a qa build.
qa2     Pull the latest repo from qa branch and do a qa build.
dev     create a dev build  with the current code base.(Do not even swith the branch).
prod    checkout the master branch, pull latest repo and do a production build
nightly Do a nightly build from latest dev branch
local   Build a plugin for the localhost from the latest dev branch'

start_build() {
    export PA_ENV
    export PRODUCT_DIR
    export SITE_CFG
    make clean
    make build
}

start_dev_build() {
    export PA_ENV
    export PRODUCT_DIR
    export SITE_CFG
    make clean
    make build-dev
}
PRODUCT_DIR="project_awesome"
SITE_CFG="./config/project_awesome_dev.rb"

if [ $# -gt 0 ]; then
    case "$1" in
        help)
            echo "${USAGE}";
            exit 0
            ;;
        prod)
            git checkout master
            git pull origin master
            PA_ENV="prod";
            version=$(awk '/^@VERSION/{print $3}' config/pa_common.rb)
            version="${version//\"}"
            PRODUCT_DIR="project_awesome_prod_"$version
            SITE_CFG="./config/project_awesome.rb"
            start_build
            ;;
        qa)
            git checkout qa
            git pull origin qa
            PA_ENV="qa";
            version=$(awk '/^@VERSION/{print $3}' config/pa_common.rb)
            version="${version//\"}"
            PRODUCT_DIR="project_awesome_qa_"$version
            SITE_CFG="./config/project_awesome_qa.rb"
            start_build
            ;;
        qa2)
            git checkout qa
            git pull origin qa
            PA_ENV="qa2";
            version=$(awk '/^@VERSION/{print $3}' config/pa_common.rb)
            version="${version//\"}"
            PRODUCT_DIR="project_awesome_qa2_"$version
            SITE_CFG="./config/project_awesome_qa2.rb"
            start_build
            ;;
        dev)
            start_dev_build
            ;;
        nightly)
            git checkout develop
            git pull origin develop
            PA_ENV="nightly"
            version=$(awk '/^@VERSION/{print $3}' config/pa_common.rb)
            version="${version//\"}"
            PRODUCT_DIR="project_awesome_nightly_"$version
            SITE_CFG="./config/project_awesome_nightly.rb"
            start_build
            ;;
        local)
            PA_ENV="local"
            version=$(awk '/^@VERSION/{print $3}' config/pa_common.rb)
            version="${version//\"}"
            PRODUCT_DIR="project_awesome_local_"$version
            SITE_CFG="./config/project_awesome_local.rb"
            start_build
            ;;
        *)
            echo "${USAGE}"
            exit 0
            ;;
    esac

    exit 0
else
    echo "${USAGE}";
    exit 0
fi
