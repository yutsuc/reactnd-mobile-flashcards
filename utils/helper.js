import { AsyncStorage } from "react-native";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

const NOTIFICATION_KEY = "UdaciCards:notifications ";

export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY).then(Notifications.cancelAllScheduledNotificationsAsync);
}

function createNotification() {
    return {
        title: "Take a Quiz!",
        body: "👋 Don't forget to do a quiz today!",
        ios: {
            sound: true,
        }
    }

}

export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then(data => {
            if (!data) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        if (status === "granted") {
                            Notifications.cancelAllScheduledNotificationsAsync();
                            let tmrw = new Date();
                            tmrw.setDate(tmrw.getDate() + 1);
                            tmrw.setHours(20);
                            tmrw.setMinutes(0);

                            Notifications.scheduleLocalNotificationAsync(createNotification(), {
                                time: tmrw,
                                repeat: "day",
                            });

                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
                        }
                    });
            }
        });
}