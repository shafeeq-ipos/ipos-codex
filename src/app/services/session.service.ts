import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SessionService {
  private cashierId: string | null = null;
  private pin: string | null = null;
  private currentTableId: string | null = null;
  private locked = false;

  openSession(id: string, pin: string): void {
    this.cashierId = id;
    this.pin = pin;
    this.locked = false;
  }

  closeSession(): void {
    this.cashierId = null;
    this.pin = null;
    this.currentTableId = null;
    this.locked = false;
  }

  isSessionOpen(): boolean {
    return this.cashierId !== null;
  }

  setTable(tableId: string): void {
    this.currentTableId = tableId;
  }

  getTable(): string | null {
    return this.currentTableId;
  }

  lock(): void {
    this.locked = true;
  }

  isLocked(): boolean {
    return this.locked;
  }

  unlock(pin: string): boolean {
    if (this.pin === pin) {
      this.locked = false;
      return true;
    }
    return false;
  }
}
