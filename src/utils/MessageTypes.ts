export enum MessageType {
    COMMAND_NOT_FOUND = "COMMAND_NOT_FOUND",
    UNEXPECTED_ERROR = "UNEXPECTED_ERROR",
    USER_NOT_IN_VOICE_CHANNEL = "USER_NOT_IN_VOICE_CHANNEL",
    PLAY_COMMAND_WRONG_URL = "PLAY_COMMAND_WRONG_URL",
    PLAY_COMMAND_RESOURCE_ERROR = "PLAY_COMMAND_RESOURCE_ERROR",
    PLAY_COMMAND_SUCCESS_RESPONSE = "PLAY_COMMAND_SUCCESS_RESPONSE",
    PLAY_COMMAND_ADDED_TO_QUEUE_SUCCESS = "PLAY_COMMAND_ADDED_TO_QUEUE_SUCCESS",
    PLAY_COMMAND_SEARCH_BY_TERM_SUCCESS = "PLAY_COMMAND_SEARCH_BY_TERM_SUCCESS",
    STOP_COMMAND_NOTHING_TO_STOP = "STOP_COMMAND_NOTHING_TO_STOP",
    STOP_COMMAND_SUCCESS_RESPONSE = "STOP_COMMAND_SUCCESS_RESPONSE",
    PAUSE_COMMAND_NOTHING_TO_PAUSE = "PAUSE_COMMAND_NOTHING_TO_PAUSE",
    PAUSE_COMMAND_SUCCESS_RESPONSE = "PAUSE_COMMAND_SUCCESS_RESPONSE",
    RESUME_COMMAND_NOTHING_TO_RESUME = "RESUME_COMMAND_NOTHING_TO_RESUME",
    RESUME_COMMAND_SUCCESS_RESPONSE = "RESUME_COMMAND_SUCCESS_RESPONSE",
    CHANGE_LANGUAGE_COMMAND_SUCCESS_RESPONSE = "CHANGE_LANGUAGE_COMMAND_SUCCESS_RESPONSE",
    QUEUE_COMMAND_NO_QUEUE_RESPONSE = "QUEUE_COMMAND_NO_QUEUE_RESPONSE",
    QUEUE_COMMAND_SUCCESS_RESPONSE = "QUEUE_COMMAND_SUCCESS_RESPONSE",
    NEXT_COMMAND_NO_PLAYER = "NEXT_COMMAND_NO_PLAYER",
    NEXT_COMMAND_NO_SONGS_IN_QUEUE = "NEXT_COMMAND_NO_SONGS_IN_QUEUE",
    NEXT_COMMAND_SUCCESS_RESPONSE = "NEXT_COMMAND_SUCCESS_RESPONSE",
    SELECT_COMMAND_NO_SEARCH = "SELECT_COMMAND_NO_SEARCH",
    SELECT_COMMAND_OPTION_OUT_OF_RANGE = "SELECT_COMMAND_OPTION_OUT_OF_RANGE",
    SELECT_COMMAND_SUCCESS_RESPONSE = "SELECT_COMMAND_SUCCESS_RESPONSE",
}