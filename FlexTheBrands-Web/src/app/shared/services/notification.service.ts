import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Notification {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  duration?: number;
}

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private notificationSubject = new Subject<Notification>();
  notification$ = this.notificationSubject.asObservable();

  success(message: string, duration = 3000): void {
    this.notificationSubject.next({ type: 'success', message, duration });
  }

  error(message: string, duration = 5000): void {
    this.notificationSubject.next({ type: 'error', message, duration });
  }

  warning(message: string, duration = 4000): void {
    this.notificationSubject.next({ type: 'warning', message, duration });
  }

  info(message: string, duration = 3000): void {
    this.notificationSubject.next({ type: 'info', message, duration });
  }
}
