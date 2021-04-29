class NPC {
    constructor(mod, name, isModdedChar) {
        this.mod = mod;
        this.name = name;
        this.isModded = isModdedChar;
    }
    getMod() {
        return this.mod;
    }
    getName() {
        return this.name;
    }
    getIsModdedChar() {
        return this.isModdedChar;
    }
    getNPCRef() {
        return this.mod + "_" + this.name;
    }
}

class CoordinatePoint {
    constructor(map, time, TileX, TileY, direction, animation, dialogue) {
        this.map = map;
        this.time = time;
        this.TileX = TileX;
        this.TileY = TileY;
        this.direction = direction;
        this.animation = animation;
        this.dialogue = dialogue;
    }

    getTime() {
        return this.time;
    }
    getTileX() {
        return this.TileX;
    }
    getTileY() {
        return this.TileY;
    }
    getCoordinatesArray() {
        var CoordinatesArray = [this.map, this.TileX, this.TileY];
        return CoordinatesArray;
    }
    getDirection() {
        return this.direction;
    }
    getDirectionName() {
        switch (this.direction) {
            case 0: return "up"
                break;

            case 1: return "right"
                break;

            case 2: return "down"
                break;

            case 3: return "left"
                break;

            default:
                return "down"
                break;
        }

    }
    getDialogue() {
        return this.dialogue;
    }
}

class ScheduleKey {
    constructor(season, dayWeek, dayMon, hearts, marriage, condition) {
        this.season = season;
        this.dayWeek = dayWeek;
        this.dayMon = dayMon;
        this.hearts = hearts;
        this.marriage = marriage;
        this.condition = condition;
    }

    getSeason() {
        return this.season;
    }
    getDayWeek() {
        return this.dayWeek;
    }
    getDayMon() {
        return this.dayMon;
    }
    getHearts() {
        return this.hearts;
    }
    getMarriage() {
        return this.marriage;
    }
    getCondition() {
        return this.condition;
    }
    getScheduleKey() {
        if (this.marriage != null) {
            return this.marriage;
        }
        else if (this.condition != null) {
            return this.condition;
        }
        else {
            var ScheduleKeyText = "";
            if (this.season != null) {
                ScheduleKeyText = ScheduleKeyText + this.season;
            }
            if (this.dayName != null) {
                if (ScheduleKeyText != null) {
                    ScheduleKeyText = ScheduleKeyText + "_";
                }
                ScheduleKeyText = ScheduleKeyText + this.dayName
            }
            if (this.dayMon != null) {
                if (ScheduleKeyText != null) {
                    ScheduleKeyText = ScheduleKeyText + "_";
                }
                ScheduleKeyText = ScheduleKeyText + this.dayMon
            }
            if (this.hearts != null) {
                if (ScheduleKeyText != null) {
                    ScheduleKeyText = ScheduleKeyText + "_";
                }
                ScheduleKeyText = ScheduleKeyText + this.hearts
            }
        }

    }
}