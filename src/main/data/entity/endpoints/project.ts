import {testConfig} from "../../../../../testConfig";

export const project  = {
    all: `${testConfig.qaApi}/api/Project/all`,
    project: `${testConfig.qaApi}/api/Project`,  //в зависимости от типа запроса: Создать, запросить, удалить, переименовать проект
//    projectId: `${testConfig.qaApi}/api/Project/${id}`,   //"Запросить проект по идентификатору"
    getAllLinkedContentPackagesUidAndVersion: `${testConfig.qaApi}/api/Project/getAllLinkedContentPackagesUidAndVersion`,   //"Запросить uid и версии контент-пакетов подключенных к проекту"
    allFunctionBlock: `${testConfig.qaApi}/api/Project/allFunctionBlock`,   //"Запросить фб проекта из контент-пакетов, подключенных к проекту"
    addFromSnapshot: `${testConfig.qaApi}/api/Project/addFromSnapshot`,   // "Создать проект из сохранённого снимка (без авторизации)"
    linkContentPackage: `${testConfig.qaApi}/api/Project/linkContentPackage`,   //"Подключить контент-пакет к проекту"
    unlinkContentPackage: `${testConfig.qaApi}/api/Project/unlinkContentPackage`   //"Отключить контент-пакет от проекта"
}